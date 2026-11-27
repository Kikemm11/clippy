import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:clippy_desktop/screens/auth/bloc/cubit.dart';
import 'package:clippy_desktop/screens/auth/bloc/state.dart';
import 'package:clippy_desktop/screens/home/widgets/app_header.dart';

class _PlanTier {
  final String id;
  final String name;
  final String priceLabel;
  final String limitLabel;
  final String adsLabel;
  final String badgeText;
  final Color accentColor;
  final bool isRecommended;

  const _PlanTier({
    required this.id,
    required this.name,
    required this.priceLabel,
    required this.limitLabel,
    required this.adsLabel,
    required this.badgeText,
    required this.accentColor,
    this.isRecommended = false,
  });
}

class PlansScreen extends StatelessWidget {
  const PlansScreen({super.key});

  static const Color _bgColor = Color(0xFFF9FAFB);
  static const Color _surfaceColor = Color(0xFFFFFFFF);
  static const Color _mutedSurface = Color(0xFFF3F4F6);
  static const Color _borderColor = Color(0xFFE5E7EB);
  static const Color _accentOrange = Color(0xFFFF5722);
  static const Color _textPrimary = Color(0xFF1F2937);
  static const Color _textSecondary = Color(0xFF4B5563);

  static const Map<String, int> _planRank = {
    'free': 0,
    'bronze': 1,
    'silver': 2,
    'gold': 3,
  };

  static const List<_PlanTier> _plans = [
    _PlanTier(
      id: 'free',
      name: 'Plan Free',
      priceLabel: 'Gratis',
      limitLabel: 'Hasta 10 MB por transferencia',
      adsLabel: 'Incluye anuncios',
      badgeText: 'Básico',
      accentColor: Color(0xFF6B7280),
    ),
    _PlanTier(
      id: 'bronze',
      name: 'Plan Bronze',
      priceLabel: '\$2 USD',
      limitLabel: 'Hasta 50 MB por transferencia',
      adsLabel: 'Sin anuncios',
      badgeText: 'Pago único',
      accentColor: Color(0xFFB45309),
    ),
    _PlanTier(
      id: 'silver',
      name: 'Plan Silver',
      priceLabel: '\$5 USD',
      limitLabel: 'Hasta 250 MB por transferencia',
      adsLabel: 'Sin anuncios',
      badgeText: 'Más elegido',
      accentColor: Color(0xFF475569),
      isRecommended: true,
    ),
    _PlanTier(
      id: 'gold',
      name: 'Plan Gold',
      priceLabel: '\$7 USD',
      limitLabel: 'Hasta 500 MB por transferencia',
      adsLabel: 'Sin anuncios',
      badgeText: 'Máxima capacidad',
      accentColor: Color(0xFFD97706),
    ),
  ];

  void _showGooglePlayNotice(BuildContext context, _PlanTier plan) {
    final messenger = ScaffoldMessenger.of(context);
    messenger.hideCurrentSnackBar();
    messenger.showSnackBar(
      SnackBar(
        content: Text(
          (plan.id != "free")
              ? 'Para activar ${plan.name} (${plan.priceLabel}), realiza la compra desde la app de Google Play con tu cuenta de Clippy.'
              : '${plan.name} incluido por defecto en todas las cuentas nuevas de Clippy. Actualizalo desde la app de Google Play con tu cuenta.',
          style: const TextStyle(
            color: Colors.white,
            fontSize: 13,
            fontWeight: FontWeight.w600,
          ),
        ),
        backgroundColor: _textPrimary,
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
        margin: const EdgeInsets.all(16),
        duration: const Duration(seconds: 4),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _bgColor,
      body: SafeArea(
        child: BlocBuilder<AuthCubit, AuthState>(
          builder: (context, authState) {
            final String? currentPlan = authState is AuthAuthenticated
                ? authState.profile.plan.toLowerCase()
                : null;

            return SingleChildScrollView(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
              child: Center(
                child: ConstrainedBox(
                  constraints: const BoxConstraints(maxWidth: double.infinity),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      const AppHeader(
                          showBackButton: true, showAuthButton: false),

                      // Hero / Value Proposition Banner
                      Container(
                        padding: const EdgeInsets.all(20),
                        decoration: BoxDecoration(
                          color: _surfaceColor,
                          borderRadius: BorderRadius.circular(16),
                          border: Border.all(color: _borderColor),
                          boxShadow: [
                            BoxShadow(
                              color: Colors.black.withValues(alpha: 0.04),
                              offset: const Offset(0, 2),
                              blurRadius: 6,
                            ),
                          ],
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                Container(
                                  padding: const EdgeInsets.symmetric(
                                      horizontal: 10, vertical: 4),
                                  decoration: BoxDecoration(
                                    color:
                                        _accentOrange.withValues(alpha: 0.12),
                                    borderRadius: BorderRadius.circular(99),
                                  ),
                                  child: const Row(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                      Text(
                                        'PAGO ÚNICO · PARA SIEMPRE',
                                        style: TextStyle(
                                          fontSize: 11,
                                          fontWeight: FontWeight.w800,
                                          color: _accentOrange,
                                          letterSpacing: 0.4,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(height: 12),
                            const Text(
                              'Un solo pago. Tus beneficios para siempre en todos tus dispositivos.',
                              style: TextStyle(
                                fontSize: 22,
                                fontWeight: FontWeight.w800,
                                color: _textPrimary,
                                height: 1.25,
                              ),
                            ),
                            const SizedBox(height: 6),
                            const Text(
                              'Sin suscripciones mensuales. Al mejorar tu plan, conservas tus beneficios de por vida en todos los dispositivos donde inicies sesión con tu cuenta de Clippy.',
                              style: TextStyle(
                                fontSize: 13,
                                color: _textSecondary,
                                height: 1.45,
                              ),
                            ),
                            const SizedBox(height: 14),

                            // Google Play Purchase Notice
                            Container(
                              padding: const EdgeInsets.all(12),
                              decoration: BoxDecoration(
                                color: _mutedSurface,
                                borderRadius: BorderRadius.circular(12),
                                border: Border.all(color: _borderColor),
                              ),
                              child: const Row(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  Icon(Icons.shop_outlined,
                                      size: 18, color: _accentOrange),
                                  SizedBox(width: 10),
                                  Expanded(
                                    child: Text(
                                      'Las compras de planes se realizan directamente dentro de la aplicación de Google Play vinculada a tu cuenta de Clippy.\nUna vez completadas, tus límites y funciones se sincronizan en tus dispositivos.',
                                      style: TextStyle(
                                        fontSize: 12,
                                        fontWeight: FontWeight.w500,
                                        color: _textPrimary,
                                        height: 1.4,
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),

                      const SizedBox(height: 18),

                      // Plans Grid
                      LayoutBuilder(
                        builder: (context, constraints) {
                          final int columns = constraints.maxWidth >= 820
                              ? 4
                              : (constraints.maxWidth >= 520 ? 2 : 1);
                          const double spacing = 12;
                          final double cardWidth =
                              (constraints.maxWidth - (columns - 1) * spacing) /
                                  columns;

                          final int? currentRank = currentPlan != null
                              ? _planRank[currentPlan]
                              : null;

                          return Wrap(
                            spacing: spacing,
                            runSpacing: spacing,
                            children: _plans.map((plan) {
                              final bool isCurrent = currentPlan == plan.id;
                              final int planRankValue = _planRank[plan.id] ?? 0;
                              final bool isLowerPlan = currentRank != null &&
                                  planRankValue < currentRank;
                              return SizedBox(
                                width: cardWidth,
                                child: _PlanCard(
                                  plan: plan,
                                  isCurrentPlan: isCurrent,
                                  isLowerPlan: isLowerPlan,
                                  onSelect: () =>
                                      _showGooglePlayNotice(context, plan),
                                ),
                              );
                            }).toList(),
                          );
                        },
                      ),

                      const SizedBox(height: 18),

                      // Footer reassurance strip
                      Container(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 16, vertical: 14),
                        decoration: BoxDecoration(
                          color: _surfaceColor,
                          borderRadius: BorderRadius.circular(14),
                          border: Border.all(color: _borderColor),
                        ),
                        child: const Wrap(
                          alignment: WrapAlignment.spaceBetween,
                          runSpacing: 8,
                          children: [
                            _FooterPerk(
                              icon: Icons.devices,
                              text:
                                  'Activo en todos tus dispositivos con tu cuenta',
                            ),
                            _FooterPerk(
                              icon: Icons.verified_outlined,
                              text: 'Sin cuotas recurrentes ni renovaciones',
                            ),
                            _FooterPerk(
                              icon: Icons.android,
                              text:
                                  'Compra gestionada en la app de Google Play',
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(height: 24),
                    ],
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

class _PlanCard extends StatelessWidget {
  final _PlanTier plan;
  final bool isCurrentPlan;
  final bool isLowerPlan;
  final VoidCallback onSelect;

  const _PlanCard({
    required this.plan,
    required this.isCurrentPlan,
    required this.isLowerPlan,
    required this.onSelect,
  });

  static const Color _surfaceColor = Color(0xFFFFFFFF);
  static const Color _mutedSurface = Color(0xFFF3F4F6);
  static const Color _borderColor = Color(0xFFE5E7EB);
  static const Color _accentOrange = Color(0xFFFF5722);
  static const Color _textPrimary = Color(0xFF1F2937);
  static const Color _textSecondary = Color(0xFF4B5563);
  static const Color _textMuted = Color(0xFF9CA3AF);

  @override
  Widget build(BuildContext context) {
    final bool isPaid = plan.id != 'free';
    final bool isDisabled = isCurrentPlan || isLowerPlan;

    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: _surfaceColor,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(
          color: plan.isRecommended ? _accentOrange : _borderColor,
          width: plan.isRecommended ? 1.5 : 1,
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.04),
            offset: const Offset(0, 2),
            blurRadius: 6,
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                plan.name,
                style: const TextStyle(
                  fontSize: 17,
                  fontWeight: FontWeight.w800,
                  color: _textPrimary,
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                decoration: BoxDecoration(
                  color: plan.isRecommended
                      ? _accentOrange.withValues(alpha: 0.12)
                      : _mutedSurface,
                  borderRadius: BorderRadius.circular(99),
                ),
                child: Text(
                  plan.badgeText,
                  style: TextStyle(
                    fontSize: 10,
                    fontWeight: FontWeight.w700,
                    color: plan.isRecommended ? _accentOrange : _textSecondary,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Row(
            crossAxisAlignment: CrossAxisAlignment.baseline,
            textBaseline: TextBaseline.alphabetic,
            children: [
              Text(
                plan.priceLabel,
                style: TextStyle(
                  fontSize: 26,
                  fontWeight: FontWeight.w800,
                  color: isPaid ? _textPrimary : _textSecondary,
                ),
              ),
              if (isPaid) ...[
                const SizedBox(width: 6),
                const Text(
                  'pago único',
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w600,
                    color: _textSecondary,
                  ),
                ),
              ],
            ],
          ),
          const SizedBox(height: 14),
          const Divider(color: _borderColor, height: 1),
          const SizedBox(height: 14),
          _PerkRow(
            icon: Icons.upload_file_outlined,
            iconColor: plan.accentColor,
            label: plan.limitLabel,
          ),
          const SizedBox(height: 10),
          _PerkRow(
            icon: isPaid ? Icons.block_flipped : Icons.campaign_outlined,
            iconColor: isPaid ? const Color(0xFF16A34A) : _textSecondary,
            label: plan.adsLabel,
          ),
          const SizedBox(height: 10),
          _PerkRow(
            icon: Icons.devices_other_outlined,
            iconColor: _textSecondary,
            label: isPaid
                ? 'Para siempre en tu cuenta'
                : 'Sincronización P2P local',
          ),
          const SizedBox(height: 18),
          SizedBox(
            height: 42,
            child: ElevatedButton(
              onPressed: isDisabled ? null : onSelect,
              style: ElevatedButton.styleFrom(
                backgroundColor:
                    plan.isRecommended ? _accentOrange : _textPrimary,
                disabledBackgroundColor: _mutedSurface,
                foregroundColor: Colors.white,
                disabledForegroundColor: _textSecondary,
                elevation: 0,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              child: Text(
                isCurrentPlan
                    ? 'Plan actual'
                    : (isPaid ? 'Obtener en Google Play' : 'Plan inicial'),
                style: const TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.w700,
                ),
              ),
            ),
          ),
          if (isCurrentPlan) ...[
            const SizedBox(height: 8),
            Text(
              isPaid ? '¡Gracias por tu compra!' : '¡Gracias por apoyarnos!',
              textAlign: TextAlign.center,
              style: const TextStyle(
                fontSize: 11.5,
                fontWeight: FontWeight.w600,
                color: _accentOrange,
              ),
            ),
          ] else if (isLowerPlan) ...[
            const SizedBox(height: 8),
            const Text(
              'Incluido en tu plan actual',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 11.5,
                fontWeight: FontWeight.w500,
                color: _textMuted,
              ),
            ),
          ],
        ],
      ),
    );
  }
}

class _PerkRow extends StatelessWidget {
  final IconData icon;
  final Color iconColor;
  final String label;

  const _PerkRow({
    required this.icon,
    required this.iconColor,
    required this.label,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Icon(icon, size: 17, color: iconColor),
        const SizedBox(width: 8),
        Expanded(
          child: Text(
            label,
            style: const TextStyle(
              fontSize: 12.5,
              fontWeight: FontWeight.w600,
              color: Color(0xFF374151),
            ),
          ),
        ),
      ],
    );
  }
}

class _FooterPerk extends StatelessWidget {
  final IconData icon;
  final String text;

  const _FooterPerk({
    required this.icon,
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        const Icon(Icons.check_circle_outline,
            size: 15, color: _PlansScreenColor.accent),
        const SizedBox(width: 6),
        Text(
          text,
          style: const TextStyle(
            fontSize: 12,
            fontWeight: FontWeight.w600,
            color: Color(0xFF4B5563),
          ),
        ),
      ],
    );
  }
}

class _PlansScreenColor {
  static const Color accent = Color(0xFFFF5722);
}
